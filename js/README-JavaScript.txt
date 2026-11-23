EXPLORE BANGLADESH - JAVASCRIPT FORM VALIDATION

External JavaScript file: js/form-validation.js

Forms connected to the file:
1. Login/login.html - loginValidation()
2. Traveler/traveler-register.html - travelerValidation()
3. TourGuide/guide-register.html - guideValidation()
4. Business/business-register.html - businessValidation()
5. Admin/admin-access-request.html - adminValidation()

The forms use novalidate and do not use HTML required/min/max validation attributes.
JavaScript checks the values and writes messages into the page using innerHTML.

Main checks include email format, Bangladeshi mobile number format and length, alphabet-only names,
password length and at least one digit, confirm-password matching, and category-specific rules.

The success message says that the entered information is valid. Submission is kept on the page
(return false) because this project has no backend endpoint to authenticate users or save registrations.
This is client-side validation only; a real website must also validate on the server.
