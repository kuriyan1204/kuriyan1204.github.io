# kuriyan1204.github.io

## License
This website is built on [ai-folio](https://github.com/alshedivat/al-folio).

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/master/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.


## note
### build locally:
```bash
docker compose pull
docker compose run --rm jekyll bundle install
 docker compose run -p 4000:8080 -p 35730:35729 jekyll # and open localhost:4000
```