import { Component } from '@angular/core';
import { PostsService} from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.components.html',
    styleUrls: ['user.components.css'],
    providers: [PostsService]
})

export class UserComponent  {
    name: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Dexter';
        this.email = 'dexterns88@gmail.com';
        this.address = {
            street: '12 Main st',
            city: 'Los Angeles',
            state: 'CA'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });

    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
    }
}

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}
