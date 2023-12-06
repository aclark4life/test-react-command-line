PROJECT_NAME := test-react-command-line
install:
	$(MAKE) npm-install

build:
	npm run babel

serve:
	node run start
