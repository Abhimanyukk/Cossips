# !/bin/back

# docker build -t gossips:latest -f .devcontainer/Dockerfile .

DOCKER_CONTAINER='docker run -it --rm -v '$(PWD):/repo' -w /repo gossips:latest' 

${DOCKER_CONTAINER} npm i --prefix fe/
${DOCKER_CONTAINER} npm run build --prefix fe/

${DOCKER_CONTAINER} mv /repo/fe/build /repo/be/build

${DOCKER_CONTAINER} pkg /repo/be/index.js --target node18-linux-arm64

# rm -r be/build