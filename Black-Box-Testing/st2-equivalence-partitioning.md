# Step 2: Equivalence Partitioning

## Feature Tested: NVIDIA Product Search

### Objective

The purpose of this test is to check how the NVIDIA website responds to different search inputs.
Equivalence partitioning divides inputs into groups that are expected to produce similar results.
Instead of testing every possible input, I select one representative value from each group.

## Valid Equivalence Partitions

| Partition | Description | Representative Value | Expected Result |
|---|---|---|---|
| V1 | Product name | GeForce RTX | Display related search results |
| V2 | Product model | RTX 5090 | Display matching product information |
| V3 | Technology name | DLSS | Display related technology information |
| V4 | General technology term | Artificial Intelligence | Display related information |

## Invalid Equivalence Partitions

| Partition | Description | Representative Value | Expected Result |
|---|---|---|---|
| I1 | Empty input | "" | Do not perform a search or request a search term |
| I2 | Spaces only | "     " | Do not perform a search or request valid input |
| I3 | Search with no matching results | xzy123456789 | Display a no-results message |

## Test Cases

| Test ID | Input | Partition | Expected Result |
|---|---|---|---|
| EP01 | GeForce RTX | V1 | Related search results appear |
| EP02 | RTX 5090 | V2 | Matching product information appears |
| EP03 | DLSS | V3 | Related technology information appears |
| EP04 | Artificial Intelligence | V4 | Related information appears |
| EP05 | Empty input | I1 | Search is not performed |
| EP06 | Spaces only | I2 | Search is not performed |
| EP07 | xzy123456789 | I3 | No matching results are displayed |

## Conclusion

Equivalence partitioning helped me organize different search inputs into groups.
I selected one example from each group to test how the website responds.
This technique helps reduce the number of test cases while still covering different types of inputs.