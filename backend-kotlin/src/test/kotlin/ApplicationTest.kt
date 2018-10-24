import org.junit.Test;
import java.text.DecimalFormat
import kotlin.test.assertEquals;

class ApplicationTest {

    val formatter = DecimalFormat("#.#######");

    @Test
    fun testMoveDiagonal(): Unit {

        // arrange
        val expected = Coordinate(0.5, 0.5);

        // act
        val speed = 1.0;
        val angle = 45.0;
        val start = Coordinate(0.0, 0.0);

        val actual = move(speed, angle, start);

        // assert
        assertEquals(expected, actual);
    }

    @Test
    fun testMoveUp(): Unit {

        // arrange
        val expected = Coordinate(0.0, 1.0);

        // act
        val speed = 1.0;
        val angle = 0.0;
        val start = Coordinate(0.0, 0.0);

        val actual = move(speed, angle, start);

        // assert
        assertEquals(expected, actual);
    }

    @Test
    fun testMoveDown(): Unit {

        // arrange
        val expected = Coordinate(1.0, 0.0);

        // act
        val speed = 1.0;
        val angle = 180.0;
        val start = Coordinate(1.0, 1.0);

        val actual = move(speed, angle, start);

        // assert
        assertEquals(expected, actual)
    }

    @Test
    fun testMoveDown_FromZero(): Unit {

        // arrange
        val expected = Coordinate(0.0, -1.0);

        // act
        val speed = 1.0;
        val angle = 180.0;
        val start = Coordinate(0.0, 0.0);

        val actual = move(speed, angle, start);

        // assert
        assertEquals(formatter.format(expected.x), formatter.format(actual.x));
        assertEquals(formatter.format(expected.y), formatter.format(actual.y));
    }
}

