# The Idea

The idea is to create a media manager that can be used to manage primarily images and videos. The media manager should be flexible and extensible and get out of the way of what you are doing by giving you the tools to do what you want to do.

## The problem

Most photo managers are limited in what they can do and what it does for you. - Also, the way the developers of these managers think we will use the tools is different from how we use them.

Using the latest technology with them is also challenging because they are not built for that. The technology is designed as one package without the ability to extend it.

## The solution

Our solution is to make media manager a framework first and foremost. By having a solid framework, we can build all kinds of tools on top of it.

## The details

We want the media manager to be as simple as possible but not easier than that. We will have a few core parts of the framework that will be the foundation for building other tools on top of it. The framework's core will manage the most important parts of the media manager. While new tools will be plugins that will extend the functionality of the media manager.

The following parts will form the core of the media manager.

### The file system

One of the core tasks of the media manager is to store the files and keep track of them. We envision an API that will be a proxy between the framework and the actual storage system. This will allow us to use any storage system we want, like a local file system, a cloud storage system, or network storage.

This filesystem will be used to store the files and metadata about the files. This will allow us to have a single source of truth about the files and the metadata. There will be no database or other storage system for the metadata.

having the metadata in the file system allows us to use already available command line tools to edit the files

### ingesting files

the media manager will have a way to ingest files. These files can be from all over. A camera, a phone, social media, a website with a large collection, or an already existing library. The media manager will have a way to ingest all of these, including metadata.

### a tasking system

We envision that a lot of computation will be done on these photos, like face recognition and other AI tasks. To do this, we will have a tasking system allowing us to run tasks on the files. These tasks will be run in a queue and will be able to be run on multiple machines.

### a plugin system

The media manager will have a plugin system that will allow us to extend the functionality of the media manager. These plugins will allow us to add new features to the media manager without having to change the core of the media manager.

These plugins will be able to add new tasks to the tasking system, new ways to ingest files, new ways to view the files and new ways to edit the files.

### an API

working with the metadata files in the filesystem will be a bit of a hassle. that is why we will be providing a API that helps us with doing queries on the data

### a web interface

While storing the files and metadata is important, we also need a way to view and edit the files. We will have a web interface that will allow us to do this. This web interface will be able to be extended by plugins.
