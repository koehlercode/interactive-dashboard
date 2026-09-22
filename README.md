# Interactive Productivity Dashboard

## Hello WEB-115!

My name is Stefany Koehler.
This project is a web-based dashboard built for **WEB-115** to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [x] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.

## Future Enhancements
- [x] Add a weekly task goal calculator

## Weekly Task Goals
The Weekly Task Goals feature allows users to calculate their overall task target for the week based on their daily routine and extra assignments. By entering their name, daily target, and any bonus tasks, the calculator multiplies the daily goal across a standard 5-day work week and adds the bonus tasks to compute and display their total weekly goal.

## Imperial/Metric Converter

The Imperial/Metric Converter allows users to enter a numeric value and select a conversion between Imperial and Metric units. The converter supports inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

```
BEGIN

    INPUT numeric value
    INPUT conversion choice

    IF conversion choice = "inch to centimeter" THEN
        SET result = numeric value * 2.54
        OUTPUT numeric value, " inches = ", result, " centimeters"

    ELSE IF conversion choice = "foot to centimeter" THEN
        SET result = numeric value * 30.48
        OUTPUT numeric value, " feet = ", result, " centimeters"

    ELSE IF conversion choice = "yard to meter" THEN
        SET result = numeric value * 0.91
        OUTPUT numeric value, " yards = ", result, " meters"

    ELSE IF conversion choice = "mile to kilometer" THEN
        SET result = numeric value * 1.61
        OUTPUT numeric value, " miles = ", result, " kilometers"

    ELSE IF conversion choice = "centimeter to inch" THEN
        SET result = numeric value * 0.39
        OUTPUT numeric value, " centimeters = ", result, " inches"

    ELSE IF conversion choice = "centimeter to foot" THEN
        SET result = numeric value * 0.0328
        OUTPUT numeric value, " centimeters = ", result, " feet"

    ELSE IF conversion choice = "meter to yard" THEN
        SET result = numeric value * 1.09
        OUTPUT numeric value, " meters = ", result, " yards"

    ELSE IF conversion choice = "kilometer to mile" THEN
        SET result = numeric value * 0.62
        OUTPUT numeric value, " kilometers = ", result, " miles"

    ELSE
        OUTPUT "Invalid conversion choice."

END
```