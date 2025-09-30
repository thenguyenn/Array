const numbers = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

        const frequency = numbers.reduce((count, num) => {
            count[num] = (count[num] || 0) + 1;
            return count;
        }, {});

        const output = document.getElementById("frequency");
        for (const num in frequency) {
            const p = document.createElement("p");
            p.textContent = `Phần tử ${num} xuất hiện ${frequency[num]} lần`;
            output.appendChild(p);
        }