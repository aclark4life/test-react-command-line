PROJECT_NAME := test-react-command-line
install:
	$(MAKE) npm-install

build:
	npm run build
	git add dist/

serve:
	node run start


clean: npm-clean
	rm -rvf dist/
