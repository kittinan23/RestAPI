import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    private tasks = [];

    @Get('all')
    findAll() {
        return this.tasks;
    }

    @Post('add')
    create(@Body() body) {
        const newTask = { id: this.tasks.length + 1, ...body };
        this.tasks.push(newTask);
        return newTask;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        const taskId = parseInt(id, 10);
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        return { message: 'Task deleted successfully' };
    }
}
