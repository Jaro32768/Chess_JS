package com.projectors.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }
    
    public List<Game> getGames() {
        return gameRepository.findAll();
    }

    public void addNewGame(Game game)  {
        Optional<Game> gameOptional = gameRepository.findGameByGameId(game.getGameId());
        if(gameOptional.isPresent()){
            throw new IllegalStateException("game already exists");
        }
        gameRepository.save(game);
    }

    public void deleteGame(Long gameId) {
        boolean exists = gameRepository.existsById(gameId);
        if(!exists){
            throw new IllegalStateException("game whit id " + gameId + "doesnt exist");
        }
        gameRepository.deleteById(gameId);
    }
}
