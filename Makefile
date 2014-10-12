default:
	uglifyjs toOBJ.js -m -c > toOBJ.min.js

test:
	node test.js && echo "Tests Passes" || echo "Tests Failed"

