<h1 align="center"><img src="https://raw.githubusercontent.com/MichaIng/DietPi-Website/master/images/dietpi-logo_180x180.png" alt="DietPi logo" width="180" height="180" loading="lazy"></h1>
<p align="center">
    <b>Lightweight justice for your single-board computer!</b>
    <br><br>
    optimised • simplified • for everyone
    <br><br>
    <a href="https://dietpi.com/" target="_blank" rel="noopener">Website</a> • <a href="https://dietpi.com/#download" target="_blank" rel="noopener">Downloads</a> • <a href="https://dietpi.com/docs/" target="_blank" rel="noopener">Documentation</a> • <a href="https://dietpi.com/phpbb/" target="_blank" rel="noopener">Forum</a> • <a href="https://dietpi.com/blog/" target="_blank" rel="noopener">Blog</a>
</p>
<hr>
<p align="center">
    <strong>Ready to run</strong> optimised software choices with <a href="https://dietpi.com/dietpi-software.html" target="_blank" rel="noopener"><strong>dietpi-software</strong></a>
    <br>Feature-rich configuration tool for your device with <strong>dietpi-config</strong>.
</p>
<hr>

## Introduction

This is the source code repository for the [DietPi Documentation website](https://dietpi.com/docs/).
It uses extended Markdown, as implemented by [MkDocs](https://www.mkdocs.org/).

[![CodeFactor](https://www.codefactor.io/repository/github/michaing/dietpi-docs/badge)](https://www.codefactor.io/repository/github/michaing/dietpi-docs)

## Building the documentation

- Install/update dependencies: `pip3 install -Ur requirements.txt`
- From the root directory, run: `mkdocs serve`

It builds the static HTML pages into a temporary directory and starts a local web server at `http://localhost:8000`. If you have troubles accessing the MkDocs website, you could also listen on a specific IP address or all IP addresses, e.g. `mkdocs serve -a 0.0.0.0:8000`.

## Contributing

There are many ways you could contribute to DietPi project. You could work on the DietPi project, extend the documentation, or just run different tests.

If you have experience with GitHub, you could either look for existent issue to start with or report a new one. Documentation updates should be done directly on GitHub, using the development branch: **[dev](https://github.com/MichaIng/DietPi-Docs/tree/dev)**, creating a Pull Request (PR).

If you need help:

- Send an email: micha@dietpi.com
- Read the documentation: <https://dietpi.com/docs/>

To see the full list of possibilities, please check our [contribution](https://dietpi.com/contribute.html) page.

## Feedback

- Ask a question on our [forum](https://dietpi.com/phpbb/).
- [File a bug report or request](https://github.com/MichaIng/DietPi-Docs/issues)
- Follow [@DietPi_](https://twitter.com/DietPi_) and let us know what you think!

### GitHub Projects

- DietPi: <https://github.com/MichaIng/DietPi>
- Documentation: <https://github.com/MichaIng/DietPi-Docs>
- Website: <https://github.com/MichaIng/DietPi-Website>

## License

<a rel="cc:attributionURL" property="dct:title" href="https://dietpi.com/docs/">DietPi-Docs</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://dietpi.com/">DietPi</a> is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License - <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.

<a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a>

This website shows logos of 3rd party software and providers which are excluded from the above license. They may only be used related to their product, for details, check individual trademark rules and licenses.
