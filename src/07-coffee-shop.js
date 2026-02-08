/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {

  if((size != "small" && size != "medium" && size !="large") || (type!="regular" && type !="latte" && type!="cappuccino" && type != "mocha")){
            return -1;
  }
  
  if(size === "small"){

        if(type==="regular"){
          if(extras.whippedCream&&extras.extraShot) return 4.25;
          if (extras.whippedCream) return 3.5;
          if (extras.extraShot) return 3.75;
          return 3;

        }
        else if(type==="latte"){
          if (extras.whippedCream && extras.extraShot) return 5.25;
          if (extras.whippedCream) return 4.5;
          if (extras.extraShot) return 4.75;
          return 4;

        }
        else if(type==="cappuccino"){
          if (extras.whippedCream && extras.extraShot) return 5.75;
          if (extras.whippedCream) return 5;
          if (extras.extraShot) return 5.25;
          return 4.5;

        }
        else{
          if (extras.whippedCream && extras.extraShot) return 6.25;
              if (extras.whippedCream) return 5.5;
              if (extras.extraShot) return 5.75;
              return 5;
        }

  }
  else if(size ==="medium"){

      if (type === "regular") {
        if (extras.whippedCream && extras.extraShot) return 5.25;
        if (extras.whippedCream) return 4.5;
        if (extras.extraShot) return 4.75;
        return 4;
      } else if (type === "latte") {
        if (extras.whippedCream && extras.extraShot) return 6.25;
        if (extras.whippedCream) return 5.5;
        if (extras.extraShot) return 5.75;
        return 5;
      } else if (type === "cappuccino") {
        if (extras.whippedCream && extras.extraShot) return 6.75;
        if (extras.whippedCream) return 6;
        if (extras.extraShot) return 6.25;
        return 5.5;
      } else {
        if (extras.whippedCream && extras.extraShot) return 7.25;
        if (extras.whippedCream) return 6.5;
        if (extras.extraShot) return 6.75;
        return 6;
      }
    

  }
  else{

     if (type === "regular") {
       if (extras.whippedCream && extras.extraShot) return 6.25;
       if (extras.whippedCream) return 5.5;
       if (extras.extraShot) return 5.75;
       return 5;
     } else if (type === "latte") {
       if (extras.whippedCream && extras.extraShot) return 7.25;
       if (extras.whippedCream) return 6.5;
       if (extras.extraShot) return 6.75;
       return 6;
     } else if (type === "cappuccino") {
       if (extras.whippedCream && extras.extraShot) return 8.75;
       if (extras.whippedCream) return 7;
       if (extras.extraShot) return 7.25;
       return 7.5;
     } else {
       if (extras.whippedCream && extras.extraShot) return 8.25;
       if (extras.whippedCream) return 7.5;
       if (extras.extraShot) return 7.75;
       return 7;
     }

  }

}
