# Log System Choices

## Overview

- [DietPi-RAMlog - Lightweight RAM logging](#dietpi-ramlog-lightweight-ram-logging)
- [Full - Full logging system with Rsyslog and Logrotate](#full-full-logging-system-with-rsyslog-and-logrotate)

Various logging methods can be selected from lightweight to full.  
If you don't require log files, get a performance boost. If you need full system logging features, DietPi can do that too.

The *Log System* can be changed at any time by running `dietpi-software` and selecting "Log System" from the menu.

![DietPi log system selection](../assets/images/dietpi-software-log-system.png){: style="width:200px"}

??? info "How do I set the **Log System** ?"
    To select the **Log System** listed below run from the command line:
    ```
    dietpi-launcher
    ```
    and selected _DietPi-Software_. or launch directly the tool:
    ```
    dietpi-software
    ```

    Choose **Log System** and select the desired item. Finally click on `Install`. DietPi will do all the necessary steps to change to the desired log system.

    ![DietPi-Software Log System menu screenshot](../assets/images/dietpi-software-log-system-selection.jpg){: style="width:400px"}

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## DietPi-RAMlog - Lightweight RAM logging

### DietPi-Ramlog #1 (default)

This option is ideal for users who do not require log files.

Pros/Cons:  
\+ Mounts */var/log* to RAM  
\+ Increases overall system performance  
\+ Increases the life of your SD card by reducing filesystem IO (read/writes)  
─ DietPi will automatically clear log files in */var/log* every hour (to free memory)  
─ Log files are NOT saved to disk  
─ Rsyslog is not installed to save resources. This may prevent some programs logging that rely on Rsyslog

Remark: If Rsyslog is required, it can be manually installed with `apt install rsyslog`.

### DietPi-Ramlog #2

This option is ideal for users who require the ability to keep log files, with the benefit of improved performance.

Pros/Cons:  
\+ Mounts */var/log* to RAM  
\+ Increases overall system performance  
\+ DietPi will automatically save/update log file data to disk every hour */root/logfile_storage*  
\+ DietPi will then clear log files in */var/log* (to free memory used by DietPi-Ramlog)  
─ Potential of loosing up to 1 hour of log file data if power is interrupted  
─ Will increase SD card write cycles on an hourly basis to save logs  
─ Rsyslog is not installed to save resources. This may prevent some programs logging that rely on Rsyslog

Remark: If Rsyslog is required, it can be manually installed with `apt install rsyslog`.

Remark: This option significantly writes less so than a constant log writing system, e.g. the *Full logging mode*.  
See also <https://www.raspberrypi.org/forums/viewtopic.php?t=11258#p123670>.

## Full - Full logging system with Rsyslog and Logrotate

This option is ideal for users who require the maximum logging possible, with no interference from DietPi.

Pros/Cons:  
─ Mounts */var/log* to DISK  
─ Decreases overall system performance  
─ Reduces the life of your SD card due to increased filesystem IO (read/write)  
\+ Comes with both Rsyslog and logrotate installed as standard  
\+ The "standard" of Linux logging systems, essential if your log file data is critical to system operation and/or maintenance
