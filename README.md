# CodeLou_FrontEnd

## Description
```
I created this site for my daughter. She has a beautiful voice and during high school was very involved in all
things musical. She would like to sing at weddings, but has not started sharing her information. So this site
is to help and encourage her to move forward. The is just a skeleton right now. I want to add links to some of
her videos on Youtube, fb, instagram, twitter tags, etc. and the functionality to collect names, phone #s from
people who contact her. It's a work in progress. Hopefully, I'll pass this semester and be able to continue.

```



## Custom CSS Classes
```
The class(es) I created:

1.  .main-heading
        I added this class so that the heading area would span then entire width of the page, to provide a
        container for the “columns” used for the heading text and so I could easily add a background image
        and style to my heading.

2.  .left side,
    .center, 
    .right side
        I added these 3 classes so that the middle section (JRP) heading text could be styled different from
        the rest of the text on the same line. I also wanted the text to “stack” on smaller devices and
        spread across the top on wider devices.

3.  .main-body
        I added this class so that the main section would be in a container that would allow me to adjust
        the width. In this case, I did not want the main body to span the entire width of the page. It
        allowed me to set different maximum widths in my media queries.

4.  .pic col
    .about col
        I added these 2 classes so I could “stack” the columns on smaller devices and display the columns
        side by side on wider devices.

5.  .vocalist
    .quote
        I was originally using the img tag to style the image of my daughter, but had change to using the
        2 separate classes so that my daughter’s image and the quote image could have different styles.

6.  .phone
        I added this class so I could style the phone # to look like the input fields for name and email address.

7.  ::placeholder
        I used this pseudo class so that the labels for my input fields would be imbedded inside the input boxes.

8.  .inputBgOpaque
        I used this class to prevent the background color of my name and email input fields from turning
        (google chrome) yellow when the user allows Chrome to auto-fill the input fields. I googled this issue
        and found this solution.

9.  .main-footer
        I added this class so that the footer area would span then entire width of the page and so I could
        easily add a background image and style to my heading.

```



## Custom JavaScript Functions
```
The javascript function(s) I created:

1. function check()
.. This funciton checks for blank input fields and reminds the site visitor to input teh missing value.

```
