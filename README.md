[![Netlify Status](https://api.netlify.com/api/v1/badges/1e519541-da15-44b2-9d10-23d8c1bc6f0a/deploy-status)](https://app.netlify.com/sites/chinderzytig-v1/deploys)

![Chinderzytig website banner](https://res.cloudinary.com/chinderzytig/image/upload/v1605558755/logos/banner_hlymn4.png)
[Chinderzytig](https://www.chinderzytig.ch/) is a news website producing weekly articles in simplified German, with the intent of making current events more accessible and understandable for school children.

This website is built using [Hugo](https://gohugo.io/), a very fast and flexible Go based static site generator, while loosely
employing Jamstack architectural principles (less focus on "J" and more focus on "amstack") through the incooporation of third party applications, such as:

- [Foresty](https://forestry.io/): content management;
- [Snipcart](https://snipcart.com/): shopping cart/ecommerce;
- [Cloudinary](https://cloudinary.com/): asset hosting;
- [Disqus](https://disqus.com/): user interaction and moderation; and
- [Algolia](https://www.algolia.com/): website search and discovery [Coming Soon!]

## Build
To run our website locally:

Ensure that [Hugo is installed](https://gohugo.io/getting-started/installing/) on your computer. For instance, those using the [Homebrew](https://brew.sh/) pkg manager on macOS, it's as simple as running:
```bash
$ brew install hugo
```

After installing Hugo, clone this repository:
```bash
$ git clone https://github.com/Chinderzytig/chinderzytig-website.git
```

Then, `cd` into the cloned repository folder and run the server:
```bash
$ hugo server -D
```

If all is okay, you should see the following output from your cmd line:
```bash
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Open your browser and navigate to `http://localhost:1313/` to view the website locally.
