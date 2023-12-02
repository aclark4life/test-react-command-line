PROJECT_NAME := test-react-command-line
build:
	npm run babel

install:
	$(MAKE) npm-install

serve:
	node run start
