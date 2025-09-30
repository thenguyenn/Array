 const students = [
            { name: "An", age: 20 },
            { name: "Bình", age: 21 },
            { name: "Châu", age: 20 },
            { name: "Dũng", age: 22 }
        ];

        const groupedByAge = students.reduce((groups, student) => {
            const age = student.age;
            if (!groups[age]) {
                groups[age] = [];
            }
            groups[age].push(student.name);
            return groups;
        }, {});

        const output = document.getElementById("grouped");
        for (const age in groupedByAge) {
            const p = document.createElement("p");
            p.textContent = `Tuổi ${age}: ${groupedByAge[age].join(", ")}`;
            output.appendChild(p);
        }