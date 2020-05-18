const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  blocks: [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
	{
      name: "Ekran",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/screen.png`,
      blocks: [
		"kivvi_screen_setup",
		{
			xml: 
			`<block type="kivvi_screen_toscreen">
					<value name="STRNG">
                        <shadow type="basic_string">
                            <field name="STRNG">Hello World!</field>
						</shadow>
                    </value> 
			</block>`
		},
		"kivvi_screen_clear",
		"kivvi_screen_send"
      ]
    },
	{
      name: "Sensörler",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/sensor.png`,
      blocks: [
		"kivvi_hcsr04p",
		"kivvi_dist",
		"kivvi_ldr",
		"kivvi_qrd1117",
		"kivvi_battery_read"
      ]
    },
	{
      name: "Bluetooth",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/bluetooth.png`,
      blocks: [
		"bt_setup",
		"bt_string"
      ]
    },
	{
      name: "Motor",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/motor.png`,
      blocks: [
		"motor_setup",
		{
                    xml : 
                    `<block type="motor_fwd_dt">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
        },
		{
                    xml : 
                    `<block type="motor_bwd_dt">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
        },
		{
                    xml : 
                    `<block type="motor_rgt_dt">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
        },
		{
                    xml : 
                    `<block type="motor_lft_dt">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
        },
		"motor_fwd_speed",
		"motor_bwd_speed",
		"motor_rgt_speed",
		"motor_lft_speed",
		"motor_stop"
      ]
    },
	{
      name: "Rotary Encoder",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/encoder.png`,
      blocks: [
	  {
                    xml : 
                    `<block type="rotary_setup">
                        <value name="ALT">
                            <shadow type="math_number">
                                <field name="NUM">-1000</field>
                            </shadow>
                        </value>
						<value name="UST">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
      },
	  {
                    xml : 
                    `<block type="rotary_set_bound">
                        <value name="ALT">
                            <shadow type="math_number">
                                <field name="NUM">-1000</field>
                            </shadow>
                        </value>
						<value name="UST">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
      },
	  "rotary_read",
	  "rotary_delta",
	  "rotary_button"
      ]
    },
	{
      name: "Müzik",
      color: "230",
      icon: `file:///${dirIcon}/static/icons/song.png`,
      blocks: [
		"kivvi_buzzer32"
      ]
    },
	{
	  name: "RGB LED",
	  color: "65",
	  icon: `file:///${dirIcon}/static/icons/led.png`,
	  blocks: [
		"kivvi_led",
		{
		  xml:
			`<block type="kivvi_rgb_begin">
							<value name="PIN">
								<shadow type="math_number">
									<field name="NUM">18</field>
								</shadow>
							</value>
							<value name="NUM">
								<shadow type="math_number">
									<field name="NUM">2</field>
								</shadow>
							</value>
						</block>`
		},
		"kivvi_rgb_clear",
		// 'neopixel_rgb_show',
		{
		  xml:
			`<block type="kivvi_rgb_setBrightness">
							<value name="BRIGHT">
								<shadow type="math_number">
									<field name="NUM">10</field>
								</shadow>
							</value>
						</block>`
		},
		"kivvi_rgb_fillLED",
		{
		  xml:
			`<block type="kivvi_rgb_setPixelColor">
							<value name="NUM">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
						</block>`
		},
		{
		  xml:
			`<block type="kivvi_rgb_setPixelCode">
							<value name="R">
								<shadow type="math_number">
									<field name="NUM">255</field>
								</shadow>
							</value>
							<value name="G">
								<shadow type="math_number">
									<field name="NUM">255</field>
								</shadow>
							</value>
							<value name="B">
								<shadow type="math_number">
									<field name="NUM">255</field>
								</shadow>
							</value>
						</block>`
		},
		{
		  xml:
			`<block type="kivvi_rgb_colorWipe">
							<value name="TIME">
								<shadow type="math_number">
									<field name="NUM">50</field>
								</shadow>
							</value>
						</block>`
		},
		{
		  xml:
			`<block type="kivvi_rgb_theaterChase">
							<value name="TIME">
								<shadow type="math_number">
									<field name="NUM">50</field>
								</shadow>
							</value>
						</block>`
		},
		"kivvi_rgb_rainbow_begin",
		{
		  xml:
			`<block type="kivvi_rgb_rainbow">
							<value name="TIME">
								<shadow type="math_number">
									<field name="NUM">20</field>
								</shadow>
							</value>
						</block>`
		},
		{
		  xml:
			`<block type="kivvi_rgb_rainbowCycle">
							<value name="TIME">
								<shadow type="math_number">
									<field name="NUM">20</field>
								</shadow>
							</value>
						</block>`
		}
		]
	}
  ]
};
