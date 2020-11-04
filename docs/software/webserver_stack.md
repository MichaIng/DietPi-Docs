# Web Development

## Stacks for web development

- [**{{item076.display_name}}**](../../{{item076.docs_url}})  
- [LASP Webserver - Apache2 / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p52)  
- [LEMP Webserver - Nginx / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [LESP Webserver - Nginx / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p53)  
- [LLMP Webserver - Lighttpd / MariaDB / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  
- [LLSP Webserver - Lighttpd / SQLite / PHP](https://dietpi.com/phpbb/viewtopic.php?p=1335#p1335)  

### Let's encrypt - Enable HTTPS / SSL

- [Certbot - Free, automated SSL cert creation and setup, allowing https](https://dietpi.com/phpbb/viewtopic.php?p=1061#p1062)  

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

- Python 3 & Flask - Micro web framework powered by Python
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

## Overview

If you are you looking for an inexpensive way to operate your web servers or a dynamic websites, you could choose one of the web development stacks. They come with a complete package. Not only will you have the DietPi OS, web server, but you'll have the database software, and also the scripting language.

All stacks come with PHP caches (APCu and OPcache). The sizes of which are optimized based on a share of total memory.

## {{item076.name}}

{{item076.long_desc}}

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

        ``` bash
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

[Return to the **Optimised Software list**](../../dietpi_optimised_software)
