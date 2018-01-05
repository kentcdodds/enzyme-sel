# how to use enzyme to find only DOM component wrappers

I'm not sure how to do this. I don't want to get composite component wrappers,
I only want to get DOM component wrappers. What API can I use? `find` is
returning both.

## EDIT

Found a solution and updated the code. Have to use `.hostNodes()` to filter out
all non-DOM component wrappers.
