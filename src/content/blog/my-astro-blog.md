---
title: My Astro Blog
description: How I whipped up a blog over the weekend using the Astro web framework.
pubDatetime: 2023-10-22T17:29:38-04:00
featured: true
tags:
  - web development
  - blog
---

![Introducing my astro blog!](@assets/images/my-astro-blog/rocket-launch.png)

I procrastinated building myself a blog for too long. I’ve owned this domain for over a year and lately I've been stockpiling draft posts and ideas. This weekend I decided to make it happen.

It all boiled down to decision paralysis:  
-What framework would I use, if any?  
-Would I design it myself and write all that css? :vomit:  
-Where would I host it and how?

Earlier this month, I went to the Philly .NET Code Camp and, on a whim, attended a session introducing Astro as an up and coming web framework. It was exactly what I’ve been (unconsciously) searching for, so this past weekend I fired up the terminal and got started.

### Why Astro?

What is Astro and why did I decide to use it?
Astro is a web framework that is content focused, with server-side rendering for fast performance. However, it allows for integrations with React, Vue, Tailwind CSS, etc, so that any client-side interactivity you need can be passed into Astro’s ‘components’.
In the end, I chose Astro because:

- **It promises to be Fast.**  
  With a blog that delivers static content, I don’t need a whole React app or similar bloat. I just need enough JavaScript to power my search function and the night/dark mode. And make my social icons wiggle. They're adorable.
- **Templating and Component System.**  
  Templating languages have always appealed to me. I enjoy a site that is compartmentalized into components that can be changed independent of content. If I want to change layout, I don't have to change every page. To add new posts, I just add some front matter to the top of a markdown file without touching any source code. Astro handles rendering everything into html.
- **Community-built Themes.**  
  Since I hate the idea of designing and then coding css, this was actually appealing, and there weren’t _too many_ themes to choose from. All were very modern and sleek, with just the right amount of cuteness.
- **Active Discord Community.**  
  I love discord. With the exception of _some_ servers, discord communities tend to be down to earth and open to discuss ideas. If you need help, someone is usually happy to lend a hand. Or to prove you wrong, if you go for a reverse-psychology approach. You can meet some awesome people and learn a ton just by observing threads of conversation. Astro's discord server has been no exception.  
  -**Documentation.**  
   Docs are always a work in progress, but Astro’s documentation feels very thorough and the community is actively collaborating on improvements.  
   -**Easy to Use.**  
   For all of the above reasons, plus it has a simple UI templating language. I just write my posts in markdown. I have the option to dive into customizing and adding my own layouts and components in the future, but for now, I want to focus on blogging, not web development tech. Astro is letting me do that.  
   Check out [Astro](https://astro.build)!

### My Project: Start to Finish

#### Picking a Theme

Astro has a whole collection of [community themes](https://astro.build/themes/). Something quickly popped up that appealed to my taste. The [developer](https://github.com/satnaing/astro-paper/tree/main) has a well documented repository on github explaining the project setup, with a demo site and some guides on customization.

#### Installing Astro with Node

Creating the astro project with the theme was accomplished in one line of code: `npm create astro@latest -- --template satnaing/astro-paper`  
I noticed an error stream by…something about node engine being lower than the required version for some dependency or other? I had already double checked that node had been updated to the current version with homebrew so… surely everything was good.

![Clueless assumption](@assets/images/memes/clueless.png) I pushed through and spun it up onto localhost.  
(I’ve gathered up the [bugs and roadblocks](#bugsandroadblocks) into a bouquet of joy near the end of this post, so I’ll skip over a few minutes of confusion that occurred after my first `npm run dev`.)  
Long story short, in about ten minutes after running my first command in the terminal, I had a site rendered in the browser!

#### Git

I initialized a repository right away and began making regular commits as I fixed issues, customized, and added my content.
![committing my changes in git](@assets/images/my-astro-blog/git-readme-update.png)

#### Customizing

Customizing the theme was not hard. I picked a basic, ready-made theme for a reason. I picked the main colors I wanted and only had to update the color palette in one spot, in one css file.  
I put in my social links and updated some of the site metadata, and that was it. Probably took less than an hour.

#### Hosting

I’ve been studying for the AWS Foundations certification, so a cloud solution for hosting my static site sounded ideal. I decided S3 would do the job and created an account.
Astro’s documentation on [how to deploy on S3 with CloudFront](https://docs.astro.build/en/guides/deploy/aws/#s3-with-cloudfront) had me in business in ten minutes.

#### Configuring the Domain

Finally, I had to configure my Google domain to my S3 bucket. Anytime I have to add DNS records to a domain I end up in a chain of google searches. My brain simply refuses to cache that information.
I quickly decided to utilize Amazon Route 53, a service that routes end users between AWS resources. The actual process of configuring the domain only took four steps.

1. In Route 53, I created a host zone.
2. I typed in my domain name.
3. I created two records, one for www and the other for the base domain name, each pointing to my S3 bucket’s endpoint.
4. Switching tabs over to the Google Domains dashboard, I set the domain to ‘Use Custom Name Servers’ and added each of the name server records that Route 53 provided.

And voila my website is reachable or else how are you reading this???

### Bugs and Roadblocks

I cannot say that this project had no issues, but everything was resolved rather quickly.

After the initial astro project setup, I ran `npm run dev` and immediately got an error in the browser.

![Experimental View Transitions error](@assets/images/my-astro-blog/experimental-view-transitions.png) I should have been clued in that something wasn’t quite right, because experimental features are now included by default in the current version of Astro, v.3, and users are advised to _remove_ `experimental: true` in their configuration, but after adding the little bit of json to my config file, the site successfully rendered. :shrug:  
I continued on my merry way.  
Then seemingly out of the blue, after putting in some customization and my own test post, I got a new error in my console.

![no renderer error](@assets/images/my-astro-blog/no-renderer.png) The site was still loading and the search function was still working. So I ignored the errors for a while, until I noticed that the dark mode theme immediately switched to the light theme when I navigated to a different page. **EPILEPSY WARNING**

![Dark mode was broken](@assets/images/my-astro-blog/dark-mode.gif) This became the biggest issue to debug.
I suspected JSX was the issue, and tried to manually install React and Tailwind. But I got that error about node version being too low again. I realized that the node specified in my $PATH was not same node installation that I keep up-to-date with homebrew. I uninstalled both and reinstalled node with homebrew.  
Nothing worked and the errors cascaded from vague Render errors to Tailwind nitpicks to configuration alerts. At one point Tailwind was installed at a higher version than `package.json` should have allowed! I ended up throwing in the towel and going to bed after a couple hours of trial and error, google searches, documentation scanning, and half-muttered swears and prayers.  
The morning brought clarity with caffeine, and I turned to the astro discord.  
A kindly senior dev checked out what I had, and was puzzled. I hadn’t made any changes to the components. My `package.json` matched the official release. My build was using Astro’s latest version, so it shouldn’t have needed the `experimental: true`. After some deliberation, he wisely suggested I try bootstrapping a new template. Just a test dummy project.  
Sixty seconds later--The new blank project worked. Neither of us know why the original broke. I’m going to pin it to the initial error with node, perhaps the version being too low caused a project dependency to be incorrectly installed way back at the beginning. I love to search down root causes in my obsessive search for knowledge, but node is a strange beast that I don't use often. I'mma just back away slowly...  
 I quickly re-added my customization and first post into the new project directory and merged it over my own. Took 30 minutes or less. :thumbsup:

#### Future to-dos

In the near future, I’d like to add workflow automation for updating the S3 build automatically as I push new posts to github. Maybe add HTTPS and Google Site Verification. But for now, everything is good enough to get started, which is the hardest step.

### TLDR;

I created this blog with the Astro web framework, flung it into an AWS S3 bucket, and now I have a static website in the cloud. I look forward to sharing more of my doings and thinkings here.
