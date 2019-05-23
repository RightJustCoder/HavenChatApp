
# Build a Slack Clone with React and Pusher Chatkit

[![Star on GitHub][github-star-badge]][github-star]

[github-star-badge]: https://img.shields.io/github/stars/pusher/build-a-slack-clone-with-react-and-pusher-chatkit.svg?style=social
[github-star]: https://github.com/pusher/build-a-slack-clone-with-react-and-pusher-chatkit/stargazers

In this tutorial, you’ll learn how to build a chat app with React and [Chatkit](https://pusher.com/chatkit?utm_source=github&utm_campaign=build-a-slack-clone-with-react-and-pusher-chatkit).

When we're done, we'll have a chat application complete with **typing indicators**, a **"who's online" list**, and **message history**:

![](media/final-app.gif)

If you think this sounds like a lot to tackle in one tutorial, you'd normally be right!

However, because we'll be using [Chatkit](https://pusher.com/chatkit?utm_source=github&utm_campaign=build-a-slack-clone-with-react-and-pusher-chatkit), we can more or less focus exclusively on the front-end React code while Chatkit does the heavy lifting.

## What is Chatkit?

[Chatkit](https://pusher.com/chatkit?utm_source=github&utm_campaign=build-a-slack-clone-with-react-and-pusher-chatkit) is a hosted API that helps you build impressive chat features into your applications with less code. Features like,

* Group chat
* One-to-one chat
* Private chat
* Typing indicators
* "Who's online" presence
* Read receipts
* Photo, video, and audio messages

Using our cross-platform SDKs, all chat data is sent to our hosted API where we manage chat state and broadcast it to your clients:

![](media/chatkit-overview.png)

You'll never have to worry about scale or infrastructure, we take care of it all for you.

Perhaps the best way to learn Chatkit is to start building, so I highly recommend you follow along. Along the way, you'll learn best practices when using Chatkit with React.

## Steps

This tutorial has been written so that you can follow along, step by step. There are **12** steps in total.

Here's a quick rundown so you know what to expect:

1. [Download the React starter template](#step-1-download-the-react-starter-template)
2. [Create your own Chatkit instance](#step-2-create-your-own-chatkit-instance)
3. [Setup a basic Node server](#step-3-setup-a-basic-node-server)
4. [Identifying the user](#step-4-identifying-the-user)
5. [Render the chat screen](#step-5-render-the-chat-screen)
6. [Connect to your Chatkit instance](#step-6-connect-to-your-chatkit-instance)
7. [Create a Chatkit room](#step-7-create-a-chatkit-room)
8. [Create a basic UI layout](#step-8-create-a-basic-ui-layout)
9. [Subscribe to new messages](#step-9-subscribe-to-new-messages)
10. [Sending messages](#step-10-sending-messages)
11. [Add realtime typing indicators](#step-11-add-realtime-typing-indicators)
12. [Add a "Who's online" list](#step-12-add-a-whos-online-list)

Alright, let's code!

## Step 1. Download the React starter template

Rather than start from absolute scratch, this walkthrough is based on a minimal starter template:

![](media/starter-template.png)

As you can see, the starter template doesn't contain any interesting logic - just boilerplate we need to run a React application and a simple Node server.

> **"Server? No one mentioned a server!"**
>
> If you're not too familiar with [Node](https://nodejs.org/en/), don't worry 😊. After the next section, we won't need to touch the server.

To get started, download the starter template then run `npm install`:

```
git clone https://github.com/pusher/build-a-slack-clone-with-react-and-pusher-chatkit chatkit-tutorial
cd chatkit-tutorial
npm install
```

(Note: To see the completed code, you can [view the `completed` branch](https://github.com/pusher/build-a-slack-clone-with-react-and-pusher-chatkit/tree/complete) or run `git checkout complete` locally.)

(Also note: This tutorial assumes the use of `npm`, but the equivalent `yarn` commands will work as well.)

## Step 2. Create your own Chatkit instance

Now you've downloaded the starter template, let's create a Chatkit instance.

To create your own Chatkit instance, [head to the dashboard](https://dash.pusher.com/?utm_source=github&utm_campaign=build-a-slack-clone-with-react-and-pusher-chatkit) and hit **Create new**:

![](media/create-a-chatkit-instance.gif)

Give your instance any name (I called mine "React Chat Tutorial") then take note of your **Instance Locator** and **Secret Key** in the **Keys** tab. We'll need them both in the next section.



# HavenChatApp
