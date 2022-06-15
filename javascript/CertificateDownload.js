const DefaultKey = '7063355213'

// The Fundamentals of Digital Marketing Certificate
document.getElementById('certificatedownload1').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id1 = 'certificatedownload1'
  successfilepath = "/CertificatePDFcopy/Google-Fundamentals-of-Digital-Marketing-certificate.pdf"
  failurepath = '/index.html'
  authenticator(tempkey, DefaultKey, id1, successfilepath, failurepath)
})

// Google IT Support Fundamentals Certificate
document.getElementById('certificatedownload2').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload2'
  successfilepath = '/CertificatePDFcopy/Google IT Support Fundamentals Certificate.pdf'
  failurepath = '/index.html'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// Diploma in Information Technology Certificate
document.getElementById('certificatedownload3').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload3'
  successfilepath = '//CertificatePDFcopy/Diploma in Information technology certificate.pdf'
  failurepath = '/index.html'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// Web Application Technologies & Django Certificate
document.getElementById('certificatedownload4').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload4'
  successfilepath = '/CertificatePDFcopy/Coursera (University of Michigan) Web Application Technologies & Django.pdf'
  failurepath = '/index.html'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})

// HTML, CSS & Javascript For Web Developers Certificate
document.getElementById('certificatedownload5').addEventListener('click', ()=>{
  tempkey = prompt('Enter Authenticator Code To Download')
  id2 = 'certificatedownload5'
  successfilepath = '/CertificatePDFcopy/Coursera(John Hopkins University) 6XRTEFZMY9M8.pdf'
  failurepath = '/index.html'
  authenticator(tempkey, DefaultKey, id2, successfilepath, failurepath)
})







// Default Function
function authenticator(userKey, systemkey, docid, sfilepath, fpath){
  if (userKey != DefaultKey) {
    alert("You Entered a worng Key ! Please Try Again");
    document.getElementById(docid).href = fpath
  }
  else if (userKey == systemkey) {
    document.getElementById(docid).href = sfilepath
  }
}
