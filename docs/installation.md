# SIS Custom - Installation

1. Clone the repository

    ```bash
    git clone https://github.com/ucberkeley/sis-custom.git
    cd sis-custom
    ```

1. Install the dependencies

    ```bash
    npm install
    npm install -g gulp
    ```

1. Install SCSS (for linting)

    ``` bash
    gem install scss_lint
    ```

1. Run the build

    ```
    gulp
    ```

    1. Watch for changes

        ```
        gulp --watch
        ```

    1. Watch for changes and lint

        ```
        gulp prod --watch
        ```
