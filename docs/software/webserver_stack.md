# Web Development

## Software components

### Stacks for web development

- [**LAMP Webserver - Apache2 / MariaDB / PHP**](#lamp-webserver-apache2-mariadb-php)  
- [LASP Webserver - Apache2 / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p52)  
- [LEMP Webserver - Nginx / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [LESP Webserver - Nginx / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [LLMP Webserver - Lighttpd / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  
- [LLSP Webserver - Lighttpd / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  

### Webservers

- [Apache2 - Feature-rich webserver](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)  
- [Nginx - Lightweight webserver](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)  
- [Lighttpd - Extremely lightweight webserver](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)
- [Tomcat8 - Apache Tomcat server](https://dietpi.com/phpbb/viewtopic.php?p=4316#p4316)  

### Databases & Data stores

- MariaDB - Open Source Relational Database
- [phpMyAdmin - SQL Administration Tool for MariaDB](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p54)  
- SQLite - Small, Fast and High reliable SQL database engine
- Redis - Open Source In-memory key–value Data Store
- InfluxDB - Open Source Time Series Database

### Programming & Web development Frameworks

- PHP - scripting language especially suited to web development

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## One-click web stack installation

### Webstack overview

A web stack consists of three items: A webserver, a database and the PHP scripting language.  
DietPi offers a one-click-installation of the following web stacks:

- [**LAMP:** Webserver - Apache2 / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p52)  
- [**LASP:** Webserver - Apache2 / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p52)  
- [**LEMP:** Webserver - Nginx / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [**LESP:** Webserver - Nginx / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [**LLMP:** Webserver - Lighttpd / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  
- [**LLSP:** Webserver - Lighttpd / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  

??? hint "Meaning of the acronyms *LAMP*, *LASP*, *LEMP*, *LESP*, *LLMP*, *LLSP*"

    - OS: **L** for Linux
    - Webserver: **A** for Apache2, **E** for Nginx, **L** for Lighttpd
    - Database: **M** for MariaDB, **S** for SQLite
    - Scripting language: **P** for PHP

All stacks come with PHP caches (APCu and OPcache). The sizes of which are optimized based on a share of total memory.

### Web stack selection

DietPi contains the option to choose the web stack of your favourite.  

Basically choosing the web stack resp. webserver, you have two options within `dietpi-software`:

- Selection via ***Software Optimized*** or
- Selection via ***Webserver Preference***

The latter is used only in the case of the first webserver background installation.

=== "Selection via Software Optimized"

    ![DietPi webserver selection software optimized](../assets/images/dietpi-software-webstack-selection.png)

    Using this option you select the complete web stack for installation.  
    Just select the web stack you want to install and do the installation via the *Install* execution within `dietpi-software`.

    ??? hint "Basically no need to select a web stack"
        Unless you specifically need a web stack, it is recommended that you allow DietPi to install web stacks automatically. This will ensure compatibility and stability on your system, for the webserver choice you have made.

=== "Selection via Webserver Preference"

    ![DietPi webserver selection webserver preference](../assets/images/dietpi-software-webserver-preference.png){: style="width:500px"}

    Using this option you only select the webserver for use in DietPi installations.  
    When you select any software for installation that requires a webserver (e.g. Pi-hole, Nextcloud, Webmin, installed via *Software Optimized*), DietPi will automatically install, configure and optimize your chosen webserver preference. DietPi will also install [MySQL](https://wikipedia.org/wiki/MySQL)/[SQLite](https://wikipedia.org/wiki/SQLite) as required, depending on your software selections. Basically, you will never need to manually select/install a webserver stack again. DietPi will do it all for you.

    ???+ info "No webserver change if already installed"
        This setting "Webserver Preference* can NOT be changed if an existing webserver is installed on the system.

=== "Which webserver to choose?"

    **Apache2**

    - Memory use = **High** | Multithreaded = **Yes**

    Apache2 is feature-rich and popular. It is recommended for beginners and users who are looking to follow Apache2 based guides.

    **Nginx**

    - Memory use = **Medium** | Multithreaded = **Yes**

    Nginx is a lightweight alternative to Apache2. Nginx claims faster webserver performance compared to Apache2. Ideal for medium-high traffic situations where Lighttpd will suffer.

    **Lighttpd**

    - Memory use = **Low** | Multithreaded = **Optional** - Some drawbacks

    Lighttpd is extremely lightweight and is generally considered to offer the "best" webserver performance on Linux for SBCs (single board computers). It is recommended for users who expect low webserver traffic and/or personal use.  
    Although the DietPi installation of Lighttpd is set to single threaded, do not be put off by this, in low usage scenarios (<10 users) it will still outperform Nginx and Apache2. Activation of multithreading is described in the Lighttpd package description.

    **Further reading & benchmarks**

    See <https://detechter.com/the-battle-of-the-web-servers-apache-vs-nginx-vs-lighttpd-2/>.

=== "Which data base to choose?"

    **MariaDB**  
    MariaDB is an open source RDBMS (relational data base management system). It is application compatible to MySQL, i.e. it can be used as a *drop in* replacement for MySQL. It has more features, fewer bugs, and a better performance compared to MySQL.

    **SQLite**  
    SQLite is an RDBMS, also compatible to MySQL. It offers a broader language support (i.e. more bindings to programming languages) compared to MariaDB. SQLite has a very small footprint. As drawbacks, it has no multi user capabilities and a couple of SQL features are missing.

## Webstack description

### LAMP Webserver - Apache2 / MariaDB / PHP

LAMP stack is a popular open source web platform commonly used to run dynamic web sites and servers. It is considered by many, as the platform of choice for development and deployment of high performance web applications which require a solid and reliable foundation.

![dietpi-webstack-lamp](../assets/images/dietpi-software-webstack-lamp.jpg)

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access phpinfo:**

    - URL = http://192.168.0.100/phpinfo.php

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

    **MariaDB Details:**

    - username = root
    - password = dietpi

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ``` bash
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ```sh
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

        Depending on your needs, you may choose the web server that fits best your needs. In case **Apache2** is not the right choice, you could continue with **Lighttpd** which comes automatically installed with DietPi, **Nginx** or **Tomcat**.

    - Database

        You may choose to install **MariaDB** or other available databases like **InfluxDB**, **Redis**, **SQLite**.

### LASP Webserver - Apache2 / SQLite / PHP

T.b.d.

### LEMP Webserver - Nginx / MariaDB / PHP

T.b.d.

### LESP Webserver - Nginx / SQLite / PHP

T.b.d.

### LLMP Webserver - Lighttpd / MariaDB / PHP

T.b.d.

### LLSP Webserver - Lighttpd / SQLite / PHP

T.b.d.

## Webservers

### Apache2 - Feature-rich webserver

T.b.d.

### Nginx - Lightweight webserver

T.b.d.

### Lighttpd - Extremely lightweight webserver

T.b.d.

### Tomcat8 - Apache Tomcat server

T.b.d.

## Databases & Data stores

### MariaDB - Open Source Relational Database

T.b.d.

### phpMyAdmin - SQL Administration Tool for MariaDB

T.b.d.

### SQLite - Small, Fast and High reliable SQL database engine

T.b.d.

### Redis - Open Source In-memory key–value Data Store

T.b.d.

### InfluxDB - Open Source Time Series Database

T.b.d.

## Programming & Web development Frameworks

### PHP - scripting language especially suited to web development

T.b.d.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)
