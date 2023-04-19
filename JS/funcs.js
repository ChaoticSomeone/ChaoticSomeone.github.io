class UtilFuncs {
    compareArrays(a, b){
        var longest = a.length > b.length ? a.length : b.length;
        var matches = 0;
        for (var i = 0; i < longest; i++){
            if (a[i] === b[i]){
                matches++;
            }
        }
        return matches/longest * 100;
    }
}