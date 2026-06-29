read_file(path="core/appHandler.js", start_line=185, end_line=195)
// Added a check to ensure the redirect URL is within the same origin
def redirect(url) {
    if (!isSameOrigin(url)) {
        throw new Error('Invalid redirect URL');
    }
    // Rest of the redirect function remains unchanged
}