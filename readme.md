Official Website: [dietpi.com](https://dietpi.com)

# DietPi Documentation

The source for DietPi documentation [ditepi.com/docs](https://dietpi.com/docs) is in this directory.
The documentation uses extended Markdown, as implemented by [MkDocs](http://mkdocs.org).

## Building the documentation

- Install dependencies: `pip install -r docs/requirements.txt`
- From the root directory, `cd` into the `docs/` folder and run:
    - `mkdocs serve`    # Starts a local webserver:  [localhost:8000](http://localhost:8000)
    - `mkdocs build`    # Builds a static site in `site/` directory
