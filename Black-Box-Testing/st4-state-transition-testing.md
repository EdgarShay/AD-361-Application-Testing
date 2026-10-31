# Step 4: State Transition Testing

## Feature Tested: NVIDIA Product Navigation

### Objective

The purpose of this test is to check how the NVIDIA website changes when a user navigates between pages.
State transition testing helps identify the different states of a website and how user actions move the website from one state to another.

## States

- S1: Homepage
- S2: Product category page
- S3: Product information page
- S4: Search results page
- S5: No-results page

## Events

- E1: Select a product category.
- E2: Select a product.
- E3: Submit a search with matching results.
- E4: Submit a search without matching results.
- E5: Select the Home link.
- E6: Select the Back button.

## Valid Transitions

- Homepage → Product category page.
- Product category page → Product information page.
- Homepage → Search results page.
- Search results page → Product information page.
- Homepage → No-results page.
- Any visited page → Previous page using the Back button.

## Invalid Transitions

- Selecting a product when no product link is available.
- Opening product information without selecting a product or product link.

## State Transition Table

| Current State | Event | Next State | Expected Result |
|---|---|---|---|
| S1: Homepage | E1: Select product category | S2: Product category page | Selected category opens |
| S2: Product category page | E2: Select product | S3: Product information page | Product information appears |
| S1: Homepage | E3: Submit search with results | S4: Search results page | Matching results appear |
| S4: Search results page | E2: Select product | S3: Product information page | Selected product opens |
| S1: Homepage | E4: Submit search without results | S5: No-results page | No-results message appears |
| S3: Product information page | E5: Select Home | S1: Homepage | Homepage opens |
| S2: Product category page | E6: Select Back | S1: Homepage | Previous page opens |
| S1: Homepage | E2: Select product without a product link | S1: Homepage | No product page should open |

## Test Cases

| Test ID | Starting State | Action | Expected State | Expected Result |
|---|---|---|---|---|
| ST01 | Homepage | Select a product category | Product category page | Category page opens |
| ST02 | Product category page | Select a product | Product information page | Product details appear |
| ST03 | Homepage | Search for GeForce RTX | Search results page | Matching results appear |
| ST04 | Search results page | Select a product | Product information page | Selected product opens |
| ST05 | Homepage | Search for xzy123456789 | No-results page | No-results message appears |
| ST06 | Product information page | Select Home | Homepage | Homepage opens |
| ST07 | Product category page | Select Back | Homepage | Previous page opens |
| ST08 | Homepage | Try to select a product without a product link | Homepage | No product page opens |

## Conclusion

State transition testing helped me understand how a website changes based on user actions.
I identified different states, events, and transitions. I also included valid and invalid transitions to test how the website
should respond to different situations.