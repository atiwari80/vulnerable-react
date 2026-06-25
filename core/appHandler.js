// Removed libxml.noent = true to prevent XXE vulnerability
// Consider using libxml.noent = false for secure processing

if (libxml)
libxml.noent=false

