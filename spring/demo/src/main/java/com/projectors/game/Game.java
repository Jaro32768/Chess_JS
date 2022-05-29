package com.projectors.game;

 
import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gameId;

    @Column(nullable = false, unique = true, length = 45)
    private Long whiteId;

    @Column(nullable = false, unique = true, length = 45)
    private Long blackId;

    @Column(nullable = false, unique = true, length = 100)
    private String fen;

    public Game(Long gameId, Long whiteId, Long blackId , String fen)
    {
        this.gameId=gameId;
        this.whiteId=whiteId;
        this.blackId=blackId;
        this.fen=fen;
    }

    public Long getGameId(){
        return this.gameId;
    }

    public void setGameId(Long GameId) {
        this.gameId = gameId;
    }

    public Long getWhiteId(){
        return this.whiteId;
    }

    public void setWhiteId(Long whiteId) {
        this.whiteId = whiteId;
    }

    public Long getBlackId(){
        return this.blackId;
    }

    public void setBlackId(Long blackId) {
        this.blackId = blackId;
    }

    public String getFen(){
        return this.fen;
    }

    public void setFen(String fen) {
        this.fen = fen;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + gameId +
                ", whiteId='" + whiteId + '\'' +
                ", blackId='" + blackId + '\'' +
                ", fen= "+ fen + '\'' +
                '}';
    }
}
