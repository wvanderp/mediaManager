# the pack

The pack is the name of how we store media in media manager.

In its most basic form, the pack is

- a folder with the od as its id
- a `pack.json` describing the contents of the pack
- and at least one file being the content of the pack

- all additional files and metadata get registered in the pack.json

  The ID of the pack is unique and can be randomly generated.

  Files in the pack can be referenced by `Packid/filename`.
