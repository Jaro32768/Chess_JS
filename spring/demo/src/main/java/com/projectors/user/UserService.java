package com.projectors.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService 
{
    private final UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user)  {
        Optional<User> userOptional = userRepository.findUserByLogin(user.getLogin());
        if(userOptional.isPresent()){
            throw new IllegalStateException("login already exists");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);
        if(!exists){
            throw new IllegalStateException("user whit id " + userId + "doesnt exist");
        }
        userRepository.deleteById(userId);
    }

    
}
