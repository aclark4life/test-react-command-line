build:
	npm run babel

install:
	$(MAKE) npm-install

serve:
	node dist/App.js
