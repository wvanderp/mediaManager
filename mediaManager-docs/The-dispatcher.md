# the dispatcher

Managing all this chaos should be done centrally. The dispatcher has multiple tasks:

* gathering tasks and putting them in the queue
* disseminating the results of the tasks to the different plugins
* dispatching the tasks to the different workers when asked

The dispatcher will also handle the registration of the plugins and the workers.
Plugins for the UI should be registered with the UI.

## the queue

The queue is the central part of the dispatcher. It is where all the tasks are stored and where the workers get their tasks.
The files required for the queue are stored in a pack file or under a temporary ID in a temporary folder.

## the workers

The workers are the ones who do the actual work. They can be run on the same machine as the dispatcher or on a different machine. The workers can be run on multiple machines at the same time.

## Should storing files in the filesystem be done through the dispatcher?

I think so because then we can also have return values from the workers. This will allow us to have a single source of truth for the files and the metadata.
