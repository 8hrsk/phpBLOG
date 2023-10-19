# phpBLOG

 Simple blog on native PHP. I use basic php features to make a small web-application. Uses MySQL as Database and Apache.

Create a `.htacces` file with:

```
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
AddDefaultCharset UTF-8
AddCharset UTF-8 .html
<FilesMatch "\.(html)$">
   Header set Cache-Control: "no-cache, no-store"
   Header unset ETag
</FilesMatch>
Header set X-Content-Type-Options nosniff
```

 #TODO:
   * Make a class for Database.
   * Server-side user data checking while making a post.
