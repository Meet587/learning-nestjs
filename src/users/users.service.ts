import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            role: "user",
        },
        {
            id: 2,
            name: "Bob Smith",
            email: "bob.smith@example.com",
            role: "admin",
        },
        {
            id: 3,
            name: "Charlie Brown",
            email: "charlie.brown@example.com",
            role: "user",
        },
        {
            id: 4,
            name: "David Miller",
            email: "david.miller@example.com",
            role: "admin",
        },
        {
            id: 5,
            name: "Eva Davis",
            email: "eva.davis@example.com",
            role: "user",
        },
        {
            id: 6,
            name: "Frank White",
            email: "frank.white@example.com",
            role: "admin",
        },
        {
            id: 7,
            name: "Grace Turner",
            email: "grace.turner@example.com",
            role: "user",
        },
    ];

    findAll(role?: "Intern" | "enginner" | "Admin") {
        if (role) {
            return this.users.filter((user) => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id);
        return user;
    }

    create(user: {
        name: string;
        email: string;
        role: "Intern" | "enginner" | "Admin";
    }) {
        const usersByHighestId = [...this.users.sort((a, b) => b.id - a.id)];

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(
        id: number,
        updatedUser: {
            name?: string;
            email?: string;
            role?: "Intern" | "enginner" | "Admin";
        },
    ) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removeUser = this.findOne(id);

        this.users = this.users.filter((user) => user.id !== id);

        return removeUser;
    }
}
