import readline from "readline";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let todoList = [];
const fileName = "notlar.json";

async function sor() {
    try {
        if (!existsSync(fileName)) {
            await fs.writeFile(fileName, JSON.stringify([]));
        }

        const fileContent = await fs.readFile(fileName, { encoding: 'utf8' });
        todoList = JSON.parse(fileContent);

        console.log("\n==== YAPILACAKLAR LİSTESİ ====");
        todoList.forEach((todo) => {
            console.log(`* ${todo.id}: ${todo.todo}`);
        });

        rl.question("Yapılacaklar Listesi ", async (answer) => {
            try {
                if (answer == "exit") {
                    rl.close();
                    return;
                }

                if (answer.startsWith("delete")) {
                    const deleteId = parseInt(answer.split(" ")[1]);
                    if (isNaN(deleteId)) {
                        console.log("Lütfen geçerli bir ID girin!");
                        sor();
                        return;
                    }

                    todoList = todoList.filter(todo => todo.id !== deleteId);
                    await fs.writeFile(fileName, JSON.stringify(todoList));
                    sor();
                    return;
                }

                const newTodo = {
                    id: todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1,
                    todo: answer,
                };

                todoList.push(newTodo);
                await fs.writeFile(fileName, JSON.stringify(todoList));
                sor();

            } catch (error) {
                console.error("İşlem sırasında bir hata oluştu:", error);
                sor();
            }
        });

    } catch (error) {
        console.error("Dosya işlemlerinde bir hata oluştu:", error);
        rl.close();
    }
}

sor();