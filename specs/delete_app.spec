# Developer can delete app

tags: delete_app

## Verify user can navigate to Reapit's site of Developer
* DFT-001 Go to login page
* DFT-002 Focus and click on "Login" button
* DFT-004 Verify "Sign in with your email and password" title display
* DFT-003 Enter "cbryan@reapit.com" into "username" field
* DFT-003 Enter "Happy123%%" into "password" field
* DFT-007 Click on "Sign in" button
* DFT-008 Click on "Apps" tab from Navigation Menu
* DFT-005 Verify the "My Apps" title display

## Verify user can open delete app modal
* DFT-006 Click on the app at "3" position
* DFT-007 Click on "DELETE APP" button
* DFT-012 Check confirmation "Are you sure you want to remove this App ‘" display

## Verify user can cancel delete process
* DFT-007 Click on "Cancel" button
* DFT-004 Verify "Verified by Reapit " title display

## Verify user can delete app successfully
* DFT-007 Click on "DELETE APP" button
* DFT-012 Check confirmation "Are you sure you want to remove this App ‘" display
* DFT-007 Click on "Delete" button
* DFT-012 Check confirmation "We have successfully deleted app ‘" display
* DFT-007 Click on "Back to List" button
* DFT-005 Verify the "My Apps" title display