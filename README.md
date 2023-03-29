# [Blue blog](https://bluelog-b6d3ilsz3-euisblue.vercel.app/) template
Next.js + TailwindCSS + Vercel

[Live Demo](https://nextjs-blog-template-one.vercel.app/)

![Demo GIF](/public/demo.gif)

## Quick Start

### 1. Fork this reposity to your user repository.

Fork this repository, change the repository name as you want, and clone it to your local enviornment.

### 2. Customize and view your site

Navigate to `/data/metadata.js` and enter your blog title, description, and other options as you need it. 

```js
const metadata = {
    author: '',
    title: '',
    description: '',
    repo: '',
    url: '',
    profileImage: '/images/profile.jpg',
    
    social: {
      github: 'https://github.com', 
      twitter: 'https://twitter.com', 
    },

    giscus: { ... },

    analytics: { ... },
  }
  
  export default metadata
```

Once you made all your changes, run the following command to install any necessary packages.
```sh
> yarn
```

Then, run the following to view your site locally at port 3000.
```sh
> yarn dev
``` 

If everything is working, save your changes and push them to your github repository.
```sh
> git add <whatever changes you made>
> git commit -m "<message>"
> git push origin main
```

### 3. Deploy your blog using Vercel

Goto [Vercel](https://vercel.com/dashboard) and login with your github account. Create a new project and import your forked repository.

Click 'Import' and you'll be able to configure projects. Usually default setting is fine. Click '**Deploy**'.

Once build is done, you'll see '**Visit**' button at the top-right corner.
![Demo-vercel](/public/demo-2.png)

## Questions?
Feel free to [open an issue](https://github.com/euisblue/nextjs-blog-template/issues/new).
