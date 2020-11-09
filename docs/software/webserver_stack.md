# Web Development

## Stacks for web development

- [**LAMP** web stack - **Apache2 / MariaDB / PHP**](#lamp-web-stack)
- [**LASP** web stack - **Apache2 / SQLite / PHP**](#lasp-web-stack)
- [**LEMP** web stack - **Nginx / MariaDB / PHP**](#lemp-web-stack)
- [**LESP** web stack - **Nginx / SQLite / PHP**](#lesp-web-stack)  
- [**LLMP** web stack - **Lighttpd / MariaDB / PHP**](#llmp-web-stack)
- [**LLSP** web stack - **Lighttpd / SQLite / PHP**](#llsp-web-stack)

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

## LAMP web stack

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

=== "Official documentation"

    - Apache HTTP Web Server - [http://httpd.apache.org](http://httpd.apache.org)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

## LASP web stack

LASP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing SQLite instead of MariaDB. 

SQLite is an embedded relational database engine. The documentation calls it _a self-contained, serverless, zero-configuration and transactional SQL database engine_. It is very popular and there are hundreds of millions copies worldwide in use today. Together with Apache2 and PHP could be a good candidate for single board computer.

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

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

        You may choose to install **SQLite** or other available databases like **InfluxDB**, **Redis**, **MariaDB**.

=== "Official documentation"

    - Apache HTTP Web Server - [http://httpd.apache.org](http://httpd.apache.org)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

## LEMP web stack

LEMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Nginx instead of Apache2 web server. 

**NGINX** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment. 

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)

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

        Depending on your needs, you may choose the web server that fits best your needs. In case **Nginx** is not the right choice, you could continue with **Lighttpd** which comes automatically installed with DietPi, **Apache2** or **Tomcat**.

    - Database

        You may choose to install **SQLite** or other available databases like **InfluxDB**, **Redis**, **MariaDB**.

=== "Official documentation"

    - Nginx - [https://www.nginx.com](https://www.nginx.com)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

## LESP web stack

LESP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Nginx instead of Apache2 web server, and SQLite instead of MariaDB. 

**NGINX** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment. 

**SQLite** implements a small, fast, self-contained, high-reliability SQL database engine, being one the most used database engine in the world ([see reference](https://www.sqlite.org/mostdeployed.html)). 

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

        Depending on your needs, you may choose the web server that fits best your needs. In case **Nginx** is not the right choice, you could continue with **Lighttpd** which comes automatically installed with DietPi, **Apache2** or **Tomcat**.

    - Database

        You may choose to install **SQLite** or other available databases like **InfluxDB**, **Redis**, **MariaDB**.

=== "Official documentation"

    - Nginx - [https://www.nginx.com](https://www.nginx.com)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

## LLMP web stack

LLMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Lighttpd instead of Apache2 web server. 

**Lighttpd** is designed and optimized for high performance environments. It comes with a small memory footprint compared to other web-servers and it provides an effective management of the cpu-load.

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

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

        Depending on your needs, you may choose the web server that fits best your needs. In case **Lighttpd** is not the right choice, you could continue with **Apache Web Server**, **Nginx** or **Tomcat webwerver**.

    - Database

        You may choose to install **MariaDB** or other available databases like **InfluxDB**, **Redis**, **SQLite**.

=== "Official documentation"

    - Lighttpd - [https://www.lighttpd.net](https://www.lighttpd.net)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

## LLSP web stack

LLSP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing **Lighttpd** instead of Apache2 web server and **SQLite** instead of MariaDB. 

**Lighttpd** is designed and optimized for high performance environments. It comes with a small memory footprint compared to other web-servers and it provides an effective management of the cpu-load.

**SQLite** implements a small, fast, self-contained, high-reliability SQL database engine, being one the most used database engine in the world ([see reference](https://www.sqlite.org/mostdeployed.html)). 

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

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

        Depending on your needs, you may choose the web server that fits best your needs. In case **Lighttpd** is not the right choice, you could continue with **Apache Web Server**, **Nginx** or **Tomcat webserver**.

    - Database

        You may choose to install **MariaDB** or other available databases like **InfluxDB**, **Redis**, **SQLite**.

=== "Official documentation"

    - Lighttpd - [https://www.lighttpd.net](https://www.lighttpd.net)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

[Return to the **Optimised Software list**](../../dietpi_optimised_software)
