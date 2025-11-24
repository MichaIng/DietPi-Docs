<!-- markdownlint-disable MD041 -->
??? hint "How to extract DietPi images on Linux (`xz-utils`)"
    On Debian and Ubuntu-based systems, open a terminal and type:

    ```sh
    sudo apt install xz-utils
    ```

    Once `xz-utils` is installed, type the following at the terminal to decompress the file:

    ```sh
    xz -d DietPi-Image.img.xz
    ```

    Replace `DietPi-Image.img.xz` with the correct name of the downloaded archive, e.g. `DietPi_*.xz`. This will decompress the DietPi image file for you to use.
