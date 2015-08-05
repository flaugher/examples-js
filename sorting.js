
/*
 * If a < b, CompareInts will return a negative number 
 * and sort will put a before b.
 *
 * If a == b, CompareInts will return zero and sort will 
 * leave their order the same.
 *
 * If a > b, CompareInts will return a positive number and
 * sort will put b before a.
 *
 * See http://mzl.la/1eRLXHR
 */

function CompareInts(a, b) {
    // We don't return 'a - b'.  Could result in overflow.
    if (a < b) return -1;
    if (a == b) return 0;
    if (a > b) return 1;
}

function sort_int() {
    var unsorted = [1, 5, 2, 30, 27];
    console.log('Unsorted array: ' + unsorted);

    // CompareInts is a callback
    var sorted = unsorted.sort(CompareInts);
    console.log('Sorted array ' + sorted);
}

sort_int();