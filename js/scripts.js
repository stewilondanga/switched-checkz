$(function() {
	//for showcase
	$("#checkfunc").transit(
		{
			transform: "rotatey(-90deg) translatez(-25px)"
		},
		500,
		"cubic-bezier(.17,.67,.42,1.02)"
	);
	$("#checkbox").transit(
		{
			transform: "translatez(25px) rotatey(-90deg)"
		},
		500,
		"cubic-bezier(.17,.67,.42,1.02)"
	);
	$("#check").transit(
		{
			delay: 1000,
			boxShadow: "7px 7px #555"
		},
		300
	);
	$("#slidein").transit(
		{
			width: "100%"
		},
		1000,
		"cubic-bezier(.17,.67,.42,1)"
	);

	$("#checkfunc").transit(
		{
			delay: 1000,
			transform: "rotatey(0deg) translatez(25px)"
		},
		500,
		"cubic-bezier(.17,.67,.42,1.02)"
	);
	$("#checkbox").transit(
		{
			transform: "translatez(25px) rotatey(0deg)",
			delay: 2000
		},
		500,
		"cubic-bezier(.17,.67,.42,1.02)"
	);
	$("#check").transit(
		{
			boxShadow: "0px 0px #555",
			delay: 1000
		},
		300
	);
	$("#slidein")
		.transit(
			{
				delay: 1000,
				height: "0%"
			},
			1000,
			"cubic-bezier(.17,.67,.42,1.02)"
		)
		.transit(
			{
				width: "0%",
				height: "100%"
			},
			0
		);
	//end of showcase

	$("#checkfunc").click(function() {
		if ($(this).is(":checked")) {
			$(this).transit(
				{
					transform: "rotatey(-90deg) translatez(-25px)"
				},
				500,
				"cubic-bezier(.17,.67,.42,1.02)"
			);
			$("#checkbox").transit(
				{
					transform: "translatez(25px) rotatey(-90deg)"
				},
				500,
				"cubic-bezier(.17,.67,.42,1.02)"
			);
			$("#check").transit(
				{
					delay: 1000,
					boxShadow: "7px 7px #555"
				},
				300
			);
			$("#slidein").transit(
				{
					width: "100%"
				},
				1000,
				"cubic-bezier(.17,.67,.42,1)"
			);
		} else {
			$(this).transit(
				{
					transform: "rotatey(0deg) translatez(25px)"
				},
				500,
				"cubic-bezier(.17,.67,.42,1.02)"
			);
			$("#checkbox").transit(
				{
					transform: "translatez(25px) rotatey(0deg)",
					delay: 1000
				},
				500,
				"cubic-bezier(.17,.67,.42,1.02)"
			);
			$("#check").transit(
				{
					boxShadow: "0px 0px #555"
				},
				300
			);
			$("#slidein")
				.transit(
					{
						height: "0%"
					},
					1000,
					"cubic-bezier(.17,.67,.42,1.02)"
				)
				.transit(
					{
						width: "0%",
						height: "100%"
					},
					0
				);
		}
	});

	$("body").css({
		height: $(window).height(),
		width: $(window).width()
	});
	$(window).resize(function() {
		$("body").css({
			height: $(window).height(),
			width: $(window).width()
		});
	});
});


var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
