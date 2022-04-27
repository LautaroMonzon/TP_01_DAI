USE [DAI_personaje]
GO

/****** Object:  Table [dbo].[Tablapersonaje]    Script Date: 27/4/2022 08:00:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tablapersonaje](
	[id] [int] NULL,
	[nombre] [varchar](50) NULL,
	[peso] [int] NULL,
	[imagen] [varchar](200) NULL,
	[historia] [varchar](200) NULL,
	[edad] [int] NULL
) ON [PRIMARY]
GO


