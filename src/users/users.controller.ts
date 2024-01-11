import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";

@Controller("users")
export class UsersController {
    @Get() // GET /users or /users?role=value&age=21 qurey param
    findAll(@Query("role") role?: "Intern" | "enginner" | "Admin") {
        return [role];
    }
    @Get("interns") //GET /users/interns
    findAllInterns() {
        return [];
    }

    @Get(":id") //GET /users/:id
    findOne(@Param("id") id: String) {
        return { id };
    }

    @Post() //POST /users
    creat(@Body() user: {}) {
        return user;
    }

    @Patch(":id") //PATCH /users/:id
    update(@Param("id") id: String, @Body() userUpdate: {}) {
        return { id, ...userUpdate };
    }

    @Delete(":id") //DELETE /users/:id
    delete(@Param("id") id: String) {
        return { id };
    }
}
