#!/bin/bash
#
file_no=00
for f in *.JPG; do
	file_no=$file_no + 1
	mv -- "$f" "$file_no.JPG"
done
