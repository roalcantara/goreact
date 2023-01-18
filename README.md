# GoReact

Simple Golang API (with Gorm and Postgres) and React PWA Demo

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)][2] [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][5] [![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg)][4] [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)][3]

## Install

  ```sh
  git clone https://github.com/roalcantara/goreact.git
  ```

### Dependencies

- [git][6]
- [Docker][8] [Compose][9]

## Usage

### [Docker][8] [Compose][9]

- Build

  ```sh
  docker compose build --remove-orphans
  ```

- Build and Run

  ```sh
  docker compose up --build --remove-orphans
  ```

- Open

  ```sh
  curl http://localhost:3000
  ```

- Shutdown

  ```sh
  docker compose down --remove-orphans
  ```

## Acknowledgements

- [Standard Readme][5]
- [Conventional Commits][3]
- [Creating a JSON CRUD API in Go (Gin/GORM)][12]
- [Docker + ReactJS tutorial: Development to Production workflow + multi-stage builds + docker compose][13]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][4] rules.
- Do follow [Git lint][7] rules.
- Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/goreact
[1]: https://opensource.org/licenses/MIT "Open Source Initiative"
[2]: https://contributor-covenant.org "A Code of Conduct for Open Source Communities"
[3]: https://conventionalcommits.org "Conventional Commits"
[4]: https://editorconfig.org "EditorConfig"
[5]: https://github.com/RichardLitt/standard-readme "Standard Readme"
[6]: https://git-scm.com "Git"
[7]: https://go.dev "Go: An open-source programming language supported by Google"
[8]: https://docker.com "Docker: The most-loved Tool in Stack Overflow’s 2022 Developer Survey"
[9]: https://docs.docker.com/compose "Docker Compose: Defining and running multi-container Docker applications"
[10]: https://jorisroovers.com/gitlint "git commit message linter"
[11]: https://pre-commit.com "A framework for managing and maintaining multi-language pre-commit hooks"
[12]: https://youtu.be/lf_kiH_NPvM "Creating a JSON CRUD API in Go (Gin/GORM)"
[13]: https://youtu.be/3xDAU5cvi5E "Docker + ReactJS tutorial: Development to Production workflow + multi-stage builds + docker compose"