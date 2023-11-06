function SadəMürəkkəb(eded) {
    if (eded === 1) {
        return "Sadədir";
    } else if (eded < 1) {
        return "Sadə ədəd deyil";
    } else {
        for (var i = 2; i < eded; i++) {
            if (eded % i === 0) {
                return "Mürəkkəbdir";
            }
        }
        return "Sadədir";
    }
}

var eded = 13;
console.log(eded + " " + SadəMürəkkəb(eded));